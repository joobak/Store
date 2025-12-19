import { useNavigate } from 'react-router-dom';
import Title from '../components/Title';
import SearchBar from '../components/SearchBar';

function Main() {
const navigate = useNavigate();

const onSearch = (text) => {
    if (!text.trim()) return;
    navigate('/story'); // fruit → story
};

return (
    <div className="App">
    <Title />
    <SearchBar onSearch={onSearch} />
    </div>
);
}

export default Main;
