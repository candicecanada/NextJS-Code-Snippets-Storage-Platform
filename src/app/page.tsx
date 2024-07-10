import Link from "next/link";
import linkStyle from "./linkStyle.module.css";

export default function Home() {
  return (
    <div className={linkStyle.wrapper}>
      <h1>Welcome page</h1>
      <Link href="/blocks/login">Login</Link>
      <Link href="/blocks/create">Create</Link>
      <Link href="/blocks/notes">Notes</Link>
      <Link href="/blocks/1">Note Details</Link>
    </div>
  );
}
