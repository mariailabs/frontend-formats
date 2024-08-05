import React from "react";

export default function FormatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section >
      <div className="flex flex-col">
        {children}
      </div>
    </section>
  );
}
