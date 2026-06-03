import fs from "fs";
import path from "path";

export function loadCakraFont() {
  return fs.readFileSync(
    path.join(process.cwd(), "public/fonts/Cakra-Normal.ttf")
  );
}

export function formatOGDate(value?: string) {
  if (!value) return null;
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function BlogOGImage({
  title,
  description,
  date,
}: {
  title: string;
  description?: string;
  date?: string;
}) {
  const formattedDate = formatOGDate(date);
  const titleSize = title.length > 40 ? 52 : title.length > 24 ? 62 : 72;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#a788af",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px",
      }}
    >
      <div
        style={{
          background: "#f2fdff",
          border: "8px solid #2f0a28",
          boxShadow: "16px 16px 0 #2f0a28",
          padding: "56px",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
        }}
      >
        {/* Yellow label chip */}
        <div
          style={{
            background: "#f2e94e",
            color: "#2f0a28",
            fontSize: 18,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            padding: "5px 12px",
            display: "flex",
            alignSelf: "flex-start",
            marginBottom: "24px",
          }}
        >
          Ayush Paul · Blog
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: titleSize,
            fontWeight: 700,
            color: "#2f0a28",
            lineHeight: 1.08,
            fontFamily: "Cakra",
            flex: 1,
          }}
        >
          {title}
        </div>

        {/* Description */}
        {description ? (
          <div
            style={{
              fontSize: 26,
              color: "rgba(47,10,40,0.6)",
              lineHeight: 1.4,
              marginTop: "16px",
            }}
          >
            {description}
          </div>
        ) : null}

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "2px solid rgba(47,10,40,0.15)",
            paddingTop: "24px",
            marginTop: "32px",
          }}
        >
          <div
            style={{
              fontSize: 19,
              color: "rgba(47,10,40,0.4)",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            {formattedDate ?? ""}
          </div>
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: "#2f0a28",
              fontFamily: "Cakra",
            }}
          >
            ayush.digital
          </div>
        </div>
      </div>
    </div>
  );
}
