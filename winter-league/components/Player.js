function Player(props){
    const name = props.player[0]
    const scores = props.player[1]

    return(
        <div className="flex-grow">
            <section>
                <h1>{name}</h1>
                <h2>{scores}</h2>
            </section>
        </div>
    )
}

export default Player