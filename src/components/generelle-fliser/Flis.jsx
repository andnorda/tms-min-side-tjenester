import { useIntl } from "react-intl";
import { LinkPanel } from "@navikt/ds-react";
import { logAmplitudeEvent } from "../../utils/amplitude";
import CSS from "./Flis.module.css";

const Flis = ({ tittel, ikon, href }) => {
  const translate = useIntl();

  return (
    <>
      <LinkPanel
        className={CSS.flis}
        href={href}
        border={false}
        onClick={() => logAmplitudeEvent(translate.formatMessage({ id: tittel }))}
      >
        <div
          style={{
            display: "grid",
            gridAutoFlow: "column",
            gap: "var(--navds-spacing-8)",
            alignItems: "center",
          }}
        >
          <div className={CSS.ikon}>{ikon}</div>
          <div>
            <LinkPanel.Title className={CSS.tittel}>{translate.formatMessage({ id: tittel })}</LinkPanel.Title>
          </div>
        </div>
      </LinkPanel>
    </>
  );
};

export default Flis;
