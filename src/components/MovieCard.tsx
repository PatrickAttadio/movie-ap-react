import { MovieType } from "../types/MovieTypes"

export const MovieCard = (props: MovieType) => {
    return (
        <div style={{ backgroundColor: '#dddddd' }}>
            <table style={{ border: '2px solid black' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #aaaaaa' }}>Id</th>
                        <th style={{ border: '1px solid #aaaaaa' }}>Titolo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ border: '1px solid #aaaaaa' }}>{props.idMovie}</td>
                        <td style={{ border: '1px solid #aaaaaa' }}>{props.titleMovie}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}