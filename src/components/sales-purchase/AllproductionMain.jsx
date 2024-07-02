import React, { useState } from 'react';
import { useTable, usePagination } from 'react-table';
import ModalForm from './ModalForm';
import './production.css';

import { IoAdd } from "react-icons/io5";

function AllproductionMain() {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
        document.body.classList.add('modal-open');
    };

    const closeModal = () => {
        setModalOpen(false);
        document.body.classList.remove('modal-open');
    };

    const data = React.useMemo(
        () => [

            {
                referenceNo: 'REF001',
                processNo: 'PROC001',
                stage: 'Stage 1',
                status: 'Active',
                bomNumber: 'BOM001',
                fgItemId: 'FG001',
                fgName: 'Item 1',
                processType: 'Type A',
                fgUom: 'kg',
                targetQty: 100,
                creationDate: '2023-06-01',
                lastModifiedBy: 'User1',
                lastModifiedDate: '2023-06-10',
            },
            {
                referenceNo: 'REF002',
                processNo: 'PROC002',
                stage: 'Stage 2',
                status: 'Completed',
                bomNumber: 'BOM002',
                fgItemId: 'FG002',
                fgName: 'Item 2',
                processType: 'Type B',
                fgUom: 'pcs',
                targetQty: 200,
                creationDate: '2023-06-02',
                lastModifiedBy: 'User2',
                lastModifiedDate: '2023-06-11',
            },
            {
                referenceNo: 'REF003',
                processNo: 'PROC003',
                stage: 'Stage 3',
                status: 'Pending',
                bomNumber: 'BOM003',
                fgItemId: 'FG003',
                fgName: 'Item 3',
                processType: 'Type C',
                fgUom: 'liters',
                targetQty: 150,
                creationDate: '2023-06-03',
                lastModifiedBy: 'User3',
                lastModifiedDate: '2023-06-12',
            },
            {
                referenceNo: 'REF004',
                processNo: 'PROC004',
                stage: 'Stage 4',
                status: 'Active',
                bomNumber: 'BOM004',
                fgItemId: 'FG004',
                fgName: 'Item 4',
                processType: 'Type D',
                fgUom: 'kg',
                targetQty: 300,
                creationDate: '2023-06-04',
                lastModifiedBy: 'User4',
                lastModifiedDate: '2023-06-13',
            },
            {
                referenceNo: 'REF005',
                processNo: 'PROC005',
                stage: 'Stage 5',
                status: 'On Hold',
                bomNumber: 'BOM005',
                fgItemId: 'FG005',
                fgName: 'Item 5',
                processType: 'Type E',
                fgUom: 'pcs',
                targetQty: 50,
                creationDate: '2023-06-05',
                lastModifiedBy: 'User5',
                lastModifiedDate: '2023-06-14',
            },
            {
                referenceNo: 'REF006',
                processNo: 'PROC006',
                stage: 'Stage 1',
                status: 'Completed',
                bomNumber: 'BOM006',
                fgItemId: 'FG006',
                fgName: 'lorem lorem lorem lorem lorem lorem',
                processType: 'Type A',
                fgUom: 'liters',
                targetQty: 400,
                creationDate: '2023-06-06',
                lastModifiedBy: 'User6',
                lastModifiedDate: '2023-06-15',
            },
            {
                referenceNo: 'REF007',
                processNo: 'PROC007',
                stage: 'Stage 2',
                status: 'Active',
                bomNumber: 'BOM007',
                fgItemId: 'FG007',
                fgName: 'lorem lorem lorem lorem lorem lorem',
                processType: 'Type B',
                fgUom: 'kg',
                targetQty: 250,
                creationDate: '2023-06-07',
                lastModifiedBy: 'User7',
                lastModifiedDate: '2023-06-16',
            },
            {
                referenceNo: 'REF008',
                processNo: 'PROC008',
                stage: 'Stage 3',
                status: 'Pending',
                bomNumber: 'BOM008',
                fgItemId: 'FG008',
                fgName: 'Item 8',
                processType: 'Type C',
                fgUom: 'pcs',
                targetQty: 500,
                creationDate: '2023-06-08',
                lastModifiedBy: 'User8',
                lastModifiedDate: '2023-06-17',
            },
            {
                referenceNo: 'REF009',
                processNo: 'PROC009',
                stage: 'Stage 4',
                status: 'Completed',
                bomNumber: 'BOM009',
                fgItemId: 'FG009',
                fgName: 'Item 9',
                processType: 'Type D',
                fgUom: 'liters',
                targetQty: 600,
                creationDate: '2023-06-09',
                lastModifiedBy: 'User9',
                lastModifiedDate: '2023-06-18',
            },
            {
                referenceNo: 'REF010',
                processNo: 'PROC010',
                stage: 'Stage 5',
                status: 'On Hold',
                bomNumber: 'BOM010',
                fgItemId: 'FG010',
                fgName: 'Item 10',
                processType: 'Type E',
                fgUom: 'kg',
                targetQty: 350,
                creationDate: '2023-06-10',
                lastModifiedBy: 'User10',
                lastModifiedDate: '2023-06-19',
            },
            {
                referenceNo: 'REF011',
                processNo: 'PROC011',
                stage: 'Stage 1',
                status: 'Active',
                bomNumber: 'BOM011',
                fgItemId: 'FG011',
                fgName: 'Item 11',
                processType: 'Type A',
                fgUom: 'pcs',
                targetQty: 700,
                creationDate: '2023-06-11',
                lastModifiedBy: 'User11',
                lastModifiedDate: '2023-06-20',
            },
            {
                referenceNo: 'REF012',
                processNo: 'PROC012',
                stage: 'Stage 2',
                status: 'Completed',
                bomNumber: 'BOM012',
                fgItemId: 'FG012',
                fgName: 'lorem lorem lorem lorem lorem lorem',
                processType: 'Type B',
                fgUom: 'liters',
                targetQty: 800,
                creationDate: '2023-06-12',
                lastModifiedBy: 'User12',
                lastModifiedDate: '2023-06-21',
            },],



        []
    );

    const columns = React.useMemo(
        () => [
            { Header: 'Ref. No', accessor: 'referenceNo' },
            { Header: 'Process No', accessor: 'processNo' },
            { Header: 'Stage', accessor: 'stage' },
            { Header: 'Status', accessor: 'status' },
            { Header: 'BOM No.', accessor: 'bomNumber' },
            { Header: 'FG Item ID', accessor: 'fgItemId' },
            { Header: 'FG Name', accessor: 'fgName' },
            { Header: 'Process Types', accessor: 'processType' },
            { Header: 'FG UOM', accessor: 'fgUom' },
            { Header: 'Target Qnty.', accessor: 'targetQty' },
            { Header: 'Creation Date', accessor: 'creationDate' },
            { Header: 'Last Modified By', accessor: 'lastModifiedBy' },
            { Header: 'Last Modified Date', accessor: 'lastModifiedDate' },
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0 },
        },
        usePagination
    );

    return (
        <div className="allproduction">
            <div className="info">
                <h3>Production</h3>
                <p>All Production Process</p>
            </div>
            <div className="allproduction-table">
                <div className="allproduction-table-header">
                    <div className='productionsearch'>
                        <input type="text" placeholder='Search' />
                    </div>
                    <div className='createproduction'>
                        <button onClick={openModal}> <IoAdd className='icon' />Create New</button>
                    </div>
                </div>
                <div className="production-item-list">
                    <div className="table-wrapper">
                        <table {...getTableProps()}>
                            <thead>
                                {headerGroups.map(headerGroup => (
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                        {headerGroup.headers.map(column => (
                                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody {...getTableBodyProps()}>
                                {page.map((row, i) => {
                                    prepareRow(row);
                                    return (
                                        <tr {...row.getRowProps()}>
                                            {row.cells.map(cell => (
                                                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                            ))}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="pagination">
                        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                            {'<'}
                        </button>
                        <span>
                            {pageIndex + 1} of {pageOptions.length}
                        </span>
                        <button onClick={() => nextPage()} disabled={!canNextPage}>
                            {'>'}
                        </button>
                    </div>
                </div>
            </div>
            <ModalForm isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
}

export default AllproductionMain;