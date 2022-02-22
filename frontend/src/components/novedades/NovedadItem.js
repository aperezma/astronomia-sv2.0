const NovedadItem = (props) => {
    const { title, subtitle, imagen, body } = props;

    return (
        <div className="recomendadas">
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
            <img src={imagen} />
            <div dangerouslySetInnerHTML={{ __html: body }} />
            <hr />
        </div>
    );
}

export default NovedadItem;