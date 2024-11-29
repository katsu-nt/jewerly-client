import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useEffect } from 'react';
import { getAllOrders } from '../APIs/MyOrderApi';
import { useState } from 'react';

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  const formatDateTime = (isoString) => {
    const date = new Date(isoString);

    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');

    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
    const year = date.getUTCFullYear();

    return `${hours}:${minutes}:${seconds} ${day}-${month}-${year}`;
  };

  const formatCurrency = (amount) => {
    return amount.toLocaleString('vi-VN').replace(/,/g, '.') + ' đ';
  };

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">{row.user.name}</TableCell>
        <TableCell component="th" scope="row">{row.deliveryDetails.name}</TableCell>
        <TableCell>{formatDateTime(row.createdAt)}</TableCell>
        <TableCell>{row.deliveryDetails.address}</TableCell>
        <TableCell>{row.deliveryDetails.city}</TableCell>
        <TableCell align='center'>{formatCurrency(row.cart.totalAmount)}</TableCell>
        <TableCell align='center'>{row.status}</TableCell>
        <TableCell align='right'>
          {row.status == 'Đã đặt' && (<div>Đang vận chuyển</div>)}
          {row.status == 'Đang vận chuyển' && (<div>Đang vận chuyển</div>)}
        </TableCell>
      </TableRow>
      
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0, backgroundColor: '#eaeaea' }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              {/* <Typography variant="h6" gutterBottom component="div">
                Danh sách sản phẩm
              </Typography> */}
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell style={{fontWeight: '600'}} align='center'>Hình ảnh</TableCell>
                    <TableCell style={{fontWeight: '600'}}>Sản phẩm</TableCell>
                    <TableCell style={{fontWeight: '600'}}>Kích thước</TableCell>
                    <TableCell style={{fontWeight: '600'}}>Giá sản phẩm</TableCell>
                    <TableCell style={{fontWeight: '600'}}>Số lượng</TableCell>
                    <TableCell style={{fontWeight: '600'}}>Tổng tiền</TableCell>
                  </TableRow>
                </TableHead>
                
                <TableBody>
                  {row.listProduct.map((product, i) => (
                    <TableRow key={i}>
                      <TableCell scope="row">
                        <img style={{ width: '30px', height: '30px', margin: 'auto' }} src={product.imageUrl} alt="" />
                      </TableCell>
                      <TableCell>{product.nameProduct}</TableCell>
                      <TableCell>{product.size}</TableCell>
                      <TableCell>{formatCurrency(1)}</TableCell>
                      <TableCell>{product.quantity}</TableCell>
                      <TableCell>{product.quantity * product.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function ManageOrderAdmin() {
  const [listOrders, setListOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const orders = await getAllOrders();
      setListOrders(orders);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách đơn hàng:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell style={{fontWeight: '600'}}>Tên người đặt</TableCell>
            <TableCell style={{fontWeight: '600'}}>Tên người nhận</TableCell>
            <TableCell style={{fontWeight: '600'}}>Ngày đặt</TableCell>
            <TableCell style={{fontWeight: '600'}}>Địa chỉ</TableCell>
            <TableCell style={{fontWeight: '600'}}>Tỉnh/Thành phố</TableCell>
            <TableCell align='center' style={{fontWeight: '600'}}>Tổng thành tiền</TableCell>
            <TableCell align='center' style={{fontWeight: '600'}}>Trạng thái</TableCell>
            <TableCell align='right' style={{fontWeight: '600'}}>Tùy chỉnh</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {listOrders.map((order, i) => (
            <Row key={i} row={order} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}