function Pattern({ pattern, description }) {
    const handleSearch = () => {
        const githubSearchUrl = `https://github.com/search?q=${pattern}`;
        window.open(githubSearchUrl, '_blank');
    };
    return (<div>
        <p onClick={handleSearch} className="cursor-pointer p-3 bg-gradient-to-r from-teal-300 to-teal-500 text-white rounded-md">{description}</p>
    </div>)
}
export default Pattern;