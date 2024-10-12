import { ReactElement, useState } from "react";
import TableHOC from "../components/admin/TableHOC"
import { Column } from "react-table";
import { Link } from "react-router-dom";

type DataType = {
    _id: string;
    amount: number;
    quantity: number;
    discount: number;
    status: ReactElement;
    action: ReactElement;
};

const coloumn: Column<DataType>[] = [
    {
        Header: "ID",
        accessor: "_id",
    },
    {
        Header: "Quantity",
        accessor: "quantity",
    },
    {
        Header: "Discount",
        accessor: "discount",
    },
    {
        Header: "Amount",
        accessor: "amount",
    },
    {
        Header: "Status",
        accessor: "status",
    },
    {
        Header: "Action",
        accessor: "action",
    },
];
const Orders = () => {

    const [rows] = useState<DataType[]>([
        {
            _id: "asdf",
            amount: 40000,
            quantity: 1,
            discount: 400,
            status: <span className="red">Processing...</span>,
            action: <Link to="/order/asdf">View</Link>,
        },
    ])

    const Table = TableHOC<DataType>(
        coloumn,
        rows,
        "dashboard-product-box",
        "Orders",
        rows.length > 6 //if row lenght>6 then show next page option 
    )();
    return (
        <div className="container">
            <h1>My Orders</h1>
            {Table}
        </div>
    )
}

export default Orders