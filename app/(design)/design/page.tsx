import { H2, Paragraph } from "@design/Typography";
import { Header } from "@design/Header";

export default function Page() {
  return (
    <div className="min-h-screen lg:border-x container lg:mx-auto text-foreground lg:grid lg:grid-cols-[240px_1fr]">
      <div className="border-r"></div>
      <div>
        <Header />
        <div className="box">
          <H2>Design System</H2>
          <Paragraph className="text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum atque
            aliquid omnis odit voluptate a repellendus possimus.
          </Paragraph>
        </div>
      </div>
    </div>
  );
}
