import useProducts from "../../../hooks/useProducts";
import useReview from "../../../hooks/useReview";
import useUsers from "../../../hooks/useUsers";
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';



const Statistics = () => {
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent,  }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    }
    const [products] = useProducts()
    const [reviews] = useReview()
    const [users] = useUsers()
    
        return (
            <div>
                <PieChart width={400} height={400}>
                    <Pie
                        data={products.length}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>
        );
    };


    export default Statistics;