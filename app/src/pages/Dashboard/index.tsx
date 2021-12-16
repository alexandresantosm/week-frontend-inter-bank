import { Button, Card, Header, Input } from "../../components";
import { Statement } from "../Dashboard/Statement";
import { currencyFormatter } from "../../utils/Formatters";

import {
  DashboardBackground,
  BodyContainer,
  InlineContainer,
  InlineTitle,
} from "./styles";

export const Dashboard = () => {
  const wallet = 5000;
  const walletFormatted = currencyFormatter(wallet);
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
              <Input style={{ flex: 1 }} placeholder="Insira o valor R$" />
              <Button>Gerar Código</Button>
            </InlineContainer>
          </Card>
          <Card noShadow width="90%">
            <InlineTitle>
              <h2 className="h2">Realizar PIX</h2>
            </InlineTitle>
            <InlineContainer>
              <Input style={{ flex: 1 }} placeholder="Insira a chave PIX" />
              <Button>Pagar PIX</Button>
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
