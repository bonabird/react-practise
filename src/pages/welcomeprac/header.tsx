interface Props {
  user: string;
}

export default function Header({ user }: Props) {
  return (
    <header>
      <p>Current User: {user}</p>
    </header>
  );
}
