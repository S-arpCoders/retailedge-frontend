import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useThree } from '@react-three/fiber';
import axios from 'axios';
import Layout from "../Layout"; // Assuming Layout contains Navbar
import './Report.css';

const Report = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data from MySQL API
    useEffect(() => {
        axios.get("http://localhost:5000/api/products")
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError("Error fetching data: " + error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <Layout>
            <div className="container">
                <h2 className="title">Product Report</h2>
                <div className="chart-container">
                    <Canvas style={{ height: '400px', width: '100%' }}>
                        <Scene data={data} />
                    </Canvas>
                </div>
            </div>
        </Layout>
    );
};

const Scene = ({ data }) => {
    const { camera, gl } = useThree();
    const barWidth = 1;
    const spacing = 0.5;

    return (
        <>
            <ambientLight />
            <spotLight position={[10, 10, 10]} />
            <gridHelper args={[10, 10]} />
            {data.map((item, index) => {
                const barHeight = item.price;
                // Using price as bar height (you can use any field)
                return (
                    <mesh
                        key={index}
                        position={[index * (barWidth + spacing), barHeight / 2, 0]}
                    >
                        <boxGeometry args={[barWidth, barHeight, barWidth]} />
                        <meshStandardMaterial color="skyblue" />
                    </mesh>
                );
            })}
        </>
    );
};

export default Report;
