interface Props {
    user: string;
    setUser: React.Dispatch<React.SetStateAction<string>>;
  }

const NameChange = ({user, setUser}: Props) => {

    const handleChange = (e: React.FocusEvent<HTMLInputElement>) => {
        setUser(e.target.value)
    }
  return (
    <div>
      <p>What do you want your new name to be?</p>
      <input
      type="text"
      placeholder="Type here"
      onChange={handleChange}
      name="user"
      value={user}
      />
    </div>
  );
};

export default NameChange;
