import fs from "fs";
import path from "path";

export function loadCakraFont() {
  return fs.readFileSync(
    path.join(process.cwd(), "public/fonts/Cakra-Normal.ttf")
  );
}

export function loadFigtreeFont() {
  return fs.readFileSync(
    path.join(process.cwd(), "public/fonts/Figtree-SemiBold.ttf")
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
  tags = [],
}: {
  title: string;
  description?: string;
  date?: string;
  tags?: string[];
}) {
  const formattedDate = formatOGDate(date);
  const titleSize = title.length > 54 ? 58 : title.length > 34 ? 70 : 82;
  const visibleTags = tags.slice(0, 3);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#a788af",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
        color: "#2f0a28",
        position: "relative",
        overflow: "hidden",
        fontFamily: "Figtree",
      }}
    >
      <div
        style={{
          position: "relative",
          background: "#f2fdff",
          border: "8px solid #2f0a28",
          boxShadow: "14px 14px 0 #2f0a28",
          padding: "48px 56px 44px",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 24,
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              color: "rgba(47,10,40,0.62)",
              fontSize: 26,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              display: "flex",
              alignSelf: "flex-start",
            }}
          >
            Ayush Paul
          </div>
          <div
            style={{
              color: "rgba(47,10,40,0.54)",
              fontSize: 25,
              fontWeight: 600,
              display: "flex",
              whiteSpace: "nowrap",
            }}
          >
            ayush.digital
          </div>
        </div>

        <div
          style={{
            color: "#2f0a28",
            fontSize: titleSize,
            fontWeight: 700,
            lineHeight: 1.02,
            letterSpacing: 0,
            flex: 1,
            maxWidth: "940px",
            fontFamily: "Cakra",
          }}
        >
          {title}
        </div>

        {description ? (
          <div
            style={{
              fontSize: 34,
              color: "rgba(47,10,40,0.72)",
              lineHeight: 1.24,
              marginTop: "20px",
              maxWidth: "880px",
              fontWeight: 500,
            }}
          >
            {description}
          </div>
        ) : null}

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
              fontSize: 25,
              color: "rgba(47,10,40,0.62)",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              display: "flex",
            }}
          >
            {formattedDate ?? ""}
          </div>
          <div
            style={{
              display: "flex",
              gap: 10,
            }}
          >
            {visibleTags.map((tag) => (
              <div
                key={tag}
                style={{
                  border: "2px solid rgba(47,10,40,0.35)",
                  padding: "6px 11px",
                  color: "rgba(47,10,40,0.66)",
                  fontSize: 20,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  display: "flex",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
