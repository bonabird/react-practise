interface Props {
  user: string;
}

export default function Body({ user }: Props) {
  return (
    <section>
      <h1>Welcome back, {user}!</h1>
      <p>Would you like to change your name?</p>
    </section>
  );
}
