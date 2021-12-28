import { useState, useEffect } from "react";
import { Button, Card, Header, Input } from "../../components";
import { Statement } from "../Dashboard/Statement";
import { currencyFormatter } from "../../utils/Formatters";
import { useAuth } from "../../hooks/useAuth";
import { request } from "../../services/resources/transaction/request-transaction-usecase";
import { pay } from "../../services/resources/transaction/pay-transaction-usecase";

import {
  DashboardBackground,
  BodyContainer,
  InlineContainer,
  InlineTitle,
} from "./styles";

export const Dashboard = () => {
  const { user, getCurrentUser } = useAuth();
  const { wallet } = user;
  const walletFormatted = currencyFormatter(wallet);
  const [value, setValue] = useState("");
  const [key, setKey] = useState("");
  const [generatedKey, setGeneratedKey] = useState("");

  const handleNewPayment = async () => {
    const { data } = await request(Number(value));

    if (data.copyPasteKey) {
      setGeneratedKey(data.copyPasteKey);
    }
  };
  const handlePayPix = async () => {
    try {
      const { data } = await pay(key);

      if (data.msg) {
        alert(data.msg);
        return;
      }

      alert("Não foi possível fazer o pagamento.");
    } catch (error) {
      console.log(error);
      alert("Não é possível receber PIX do mesmo usuário");
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  if (!user) {
    return null;
  }

  return (
    <DashboardBackground>
      <Header />
      <BodyContainer>
        <section>
          <Card noShadow width="90%">
            <InlineTitle>
              <h2 className="h2">Saldo Atual</h2>
            </InlineTitle>
            <InlineContainer>
              <h3 className="wallet">{walletFormatted}</h3>
            </InlineContainer>
          </Card>
          <Card noShadow width="90%">
            <InlineTitle>
              <h2 className="h2">Receber PIX</h2>
            </InlineTitle>
            <InlineContainer>
              <Input
                style={{ flex: 1 }}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Insira o valor R$"
              />
              <Button onClick={handleNewPayment}>Gerar Código</Button>
            </InlineContainer>
            {generatedKey && (
              <>
                <p className="primary-color">Pix copia e cola</p>
                <p className="primary-color">{generatedKey}</p>
              </>
            )}
          </Card>
          <Card noShadow width="90%">
            <InlineTitle>
              <h2 className="h2">Realizar PIX</h2>
            </InlineTitle>
            <InlineContainer>
              <Input
                style={{ flex: 1 }}
                value={key}
                onChange={(e) => setKey(e.target.value)}
                placeholder="Insira a chave PIX"
              />
              <Button onClick={handlePayPix}>Pagar PIX</Button>
            </InlineContainer>
          </Card>
        </section>
        <section>
          <Card noShadow width="90%">
            <InlineTitle>
              <h2 className="h2">Extrato da Conta</h2>
            </InlineTitle>
            <Statement />
          </Card>
        </section>
      </BodyContainer>
    </DashboardBackground>
  );
};
