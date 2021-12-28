interface IHelloProp {
    message?: string
}

const Hello:React.FC<IHelloProp> = (props) => {
    return <h1>{props.message}</h1>
}

Hello.defaultProps = {
    message: 'Hello world!'
}


export default Hello