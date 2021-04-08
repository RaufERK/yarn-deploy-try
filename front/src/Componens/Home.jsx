import { useEffect, useState } from 'react';

const Home = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const preResult = await fetch('/api');
    const { data } = await preResult.json();
    setData(data);
  };

  useEffect(() => getData(), []);

  return (
    <div>
      <h1>Home</h1>
      {data.map(({ id, label }) => (
        <li key={id}>{label}</li>
      ))}
    </div>
  );
};

export default Home;
