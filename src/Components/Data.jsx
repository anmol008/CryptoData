import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../CSS/Data.css'

export const Data = () => {
const [query, setQuery] = useState("")
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios
            .get(`https://api.coincap.io/v2/assets`)
            .then(res => {
                console.log(res.data)
                setPosts(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <>
            <div className='data'>
                <table>
                    <tbody>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Market Cap</th>
                            <th>VWAP (24Hr)	</th>
                            <th>Supply	</th>
                            <th>Volume(24Hr)</th>
                            <th>Change(24Hr)</th>
                        </tr>
                        {

                            posts.map(post => <tr key={post.rank}>
                                <td>{post.rank}</td>
                                <td className='name'>
                                    <img src={`https://assets.coincap.io/assets/icons/${post.symbol.toLowerCase()}@2x.png`} alt="" />
                                    <div>
                                        <h3>{post.id}  <br />
                                            <span className="symbol">{post.symbol}</span>
                                        </h3>
                                    </div>
                                </td>
                                <td>{(post.priceUsd / 1000).toFixed(6)}</td>
                                <td>{(post.marketCapUsd / 1000000).toFixed(3)}</td>
                                <td>{(post.vwap24Hr / 1000).toFixed(2)}	</td>
                                <td>{(post.supply / 1).toFixed(2)}	</td>
                                <td>{(post.volumeUsd24Hr / 1).toFixed(2)}</td>
                                <td>{(post.changePercent24Hr / 1).toFixed(2)}%</td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>

    )
}
