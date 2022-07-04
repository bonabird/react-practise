interface Props {
    number: number,
}

const Count = ({number}: Props) => {
    return (
        <div>
            <h1>{number}</h1>
        </div>
    )
};

export default Count;
