import Header from './Header'

export default function Home() {

    const submitSearch = async (e) => {
        e.preventDefault(); 
        fetch('http://localhost:5000/search')
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <>
        <form onSubmit={submitSearch}>
        <label>Search</label>
        <input className="border border-black"/>
        <button type='submit'>Go</button>
        </form>
        </>
    )
}