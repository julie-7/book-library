import { useState } from "react";

export const Home = () => {
    const books = [
        { id: 1, Title: "FunnyStory", Author: "emily Henry", Year: 2024 },
        { id: 2, Title: "thinner", Author: "stephen king", Year: 1984 },
        { id: 3, Title: "fear street first date", Author: "R.L.Stine", Year: 1992 }
    ]
    return (
        <>
            {
                books.map((book) => (
                    <div key={book.id}>
                        <h3>{book.Title}</h3>
                        <p>Author:{book.Author}</p>
                        <p>Year:{book.Year}</p>

                    </div>
                ))
            }

        </>

    )
}


