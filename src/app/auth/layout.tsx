import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1>logo do app</h1>
      <div>{children}</div>
    </div>
  );
}
