import React, { useEffect, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import './style/ManageProductAdmin.css';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { MenuItem, Select } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: '14px 8px'
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const listCategories = [
  { id: 1, name: 'Vòng - Lắc', link: '/vong-lac' },
  { id: 2, name: 'Nhẫn', link: '/nhan' },
  { id: 3, name: 'Dây chuyền', link: '/day-chuyen' },
  { id: 4, name: 'Bông tai', link: '/bong-tai' },
  { id: 5, name: 'Khuyên xỏ', link: '/khuyen-xo' },
  { id: 6, name: 'Trang sức đôi', link: '/trang-suc-doi' },
  { id: 7, name: 'Phong thủy', link: '/phong-thuy' },
  { id: 8, name: 'Quà tặng', link: '/qua-tang' },
  { id: 9, name: 'Phụ kiện', link: '/phu-kien' },
];

const ManageProductAdmin = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const listProduct = [
    {
      _id: '1',
      imageUrl: 'http://res.cloudinary.com/dr0zxhvs6/image/upload/v1732618523/zdxacmzj0flbezyti43t.jpg',
      nameProduct: 'Vòng Tay Vàng 18K Sang Trọng',
      description: 'Vòng tay vàng 18K với thiết kế tinh tế, thích hợp cho các dịp lễ tết, sự kiện sang trọng.',
      typeProduct: 'Trang sức',
      gender: 'Nữ',
      price: 10000000,
      listSize: [
        { size: 'S', quantity: 5 },
        { size: 'M', quantity: 10 },
        { size: 'L', quantity: 3 },
      ],
    },
    {
      _id: '2',
      imageUrl: 'http://res.cloudinary.com/dr0zxhvs6/image/upload/v1732618523/zdxacmzj0flbezyti43t.jpg',
      nameProduct: 'Vòng Tay Bạc Chạm Khắc',
      description: 'Vòng tay bạc tinh xảo, thiết kế chạm khắc hoa văn độc đáo, phù hợp cho các bạn yêu thích sự nhẹ nhàng và thanh thoát.',
      typeProduct: 'Trang sức',
      gender: 'Nữ',
      price: 10000000,
      listSize: [
        { size: 'M', quantity: 8 },
        { size: 'L', quantity: 12 },
        { size: 'XL', quantity: 7 },
      ],
    },
    {
      _id: '3',
      imageUrl: 'http://res.cloudinary.com/dr0zxhvs6/image/upload/v1732618523/zdxacmzj0flbezyti43t.jpg',
      nameProduct: 'Vòng Tay Đính Đá Cầu Vồng',
      description: 'Vòng tay đính đá cầu vồng với thiết kế bắt mắt, làm nổi bật sự sang trọng và quý phái.',
      typeProduct: 'Trang sức',
      gender: 'Nữ',
      price: 10000000,
      listSize: [
        { size: 'S', quantity: 15 },
        { size: 'M', quantity: 20 },
        { size: 'L', quantity: 10 },
      ],
    },
    {
      _id: '4',
      imageUrl: 'http://res.cloudinary.com/dr0zxhvs6/image/upload/v1732618523/zdxacmzj0flbezyti43t.jpg',
      nameProduct: 'Vòng Tay Charm Cao Cấp',
      description: 'Vòng tay charm cao cấp với các phụ kiện charm xinh xắn, tạo nên vẻ đẹp đầy cá tính và lạ mắt.',
      typeProduct: 'Trang sức',
      gender: 'Nam',
      price: 10000000,
      listSize: [
        { size: 'M', quantity: 6 },
        { size: 'L', quantity: 9 },
        { size: 'XL', quantity: 4 },
      ],
    },
    {
      _id: '5',
      imageUrl: 'http://res.cloudinary.com/dr0zxhvs6/image/upload/v1732618523/zdxacmzj0flbezyti43t.jpg',
      nameProduct: 'Vòng Tay Nam Đơn Giản',
      description: 'Vòng tay nam với thiết kế đơn giản nhưng sang trọng, thích hợp cho các dịp đi làm hay dạo phố.',
      typeProduct: 'Trang sức',
      gender: 'Nam',
      price: 10000000,
      listSize: [
        { size: 'M', quantity: 12 },
        { size: 'L', quantity: 14 },
        { size: 'XL', quantity: 5 },
      ],
    },
  ];

  const getProductRemaining = (product) => {
    if (product.listSize.length > 0) {
      let num = 0;
      product.listSize.forEach((size) => {
        num += size.quantity;
      });

      return num;
    }
  };

  // Hàm xử lý button bên trong cột "Tùy chỉnh"
  const onClickButtonMoreAction = (product, type) => () => {
    // Edit
    if (type == 'edit') {
      setSelectedProduct(product); // Lưu sản phẩm được chọn (nếu cần sử dụng sau)
      setOpen(true); // Mở Drawer
    }

    // Delete
    if (type == 'delete') {

    }
  }

  // Hàm xử lý button thêm mới sản phẩm
  const onClickAddNew = () => {
    setOpen(true); // Mở Drawer
  }

  return (
    <div className='manage-product-admin-component'>
      {/* FILTER */}
      <div className="group-filter-container">
        <div className='group-filter'></div>
        <div onClick={onClickAddNew} className='button-add'>Thêm mới sản phẩm</div>
      </div>

      {/* PRODUCTS LIST */}
      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow>
              <StyledTableCell align='center' style={{ padding: '10px 8px' }}>Hình ảnh</StyledTableCell>
              <StyledTableCell style={{ padding: '10px 8px' }}>Tên sản phẩm</StyledTableCell>
              <StyledTableCell style={{ padding: '10px 8px' }}>Mô tả</StyledTableCell>
              <StyledTableCell align='center' style={{ padding: '10px 8px' }}>Loại sản phẩm</StyledTableCell>
              <StyledTableCell align='center' style={{ padding: '10px 8px' }}>Giới tính</StyledTableCell>
              <StyledTableCell align='center' style={{ padding: '10px 8px' }}>Giá tiền</StyledTableCell>
              <StyledTableCell align='center' style={{ padding: '10px 8px' }}>Số lượng còn lại</StyledTableCell>
              <StyledTableCell align='right' style={{ padding: '10px 8px' }}>Tùy chỉnh</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {listProduct.map((product, i) => (
              <StyledTableRow key={i}>
                <StyledTableCell>
                  <img style={{ width: '30px', height: '30px', margin: 'auto' }} src={product.imageUrl} alt="" />
                </StyledTableCell>
                <StyledTableCell>
                  {product.nameProduct}
                </StyledTableCell>
                <StyledTableCell>{product.description}</StyledTableCell>
                <StyledTableCell align='center'>{product.typeProduct}</StyledTableCell>
                <StyledTableCell align='center'>{product.gender}</StyledTableCell>
                <StyledTableCell align='center'>{product.price}</StyledTableCell>
                <StyledTableCell align='center'>{getProductRemaining(product)}</StyledTableCell>
                <StyledTableCell align='right'>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', justifyContent: 'end', fontSize: '18px' }}>
                    <i style={{ cursor: 'pointer' }} className="fa-solid fa-pencil" onClick={onClickButtonMoreAction(product, 'edit')}></i>
                    <i style={{ cursor: 'pointer', color: 'red' }} className="fa-solid fa-trash-can"></i>
                  </div>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* DRAWER */}
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} anchor='right' className='drawer-product-detail' onClose={toggleDrawer(false)}>
        <div className='product-detail-container'>
          <div className="header-drawer">
            Chi tiết sản phẩm
          </div>

          <div className="content-drawer">
            <div className="box-content">
              <div className="text">Tên sản phẩm</div>
              <input className='input-name' type="text" />
            </div>

            <div className="box-content">
              <div className="text">Mô tả sản phẩm</div>
              <textarea className='input-name' type="text" />
            </div>

            <div className="box-content">
              <div className="text">Loại sản phẩm</div>
              <Select
                labelId="demo-select-size-label"
                label="Loại sản phẩm"
              >
                {listCategories.map((cate) => (
                  <MenuItem value={cate.id}>{cate.name}</MenuItem>
                ))}
              </Select>
            </div>

            <div className="box-content">
              <div className="text">Giới tính</div>
              <Select
                labelId="demo-select-gender-label"
                label="Giới tính"
              >
                <MenuItem value={1}>Nam</MenuItem>
                <MenuItem value={2}>Nữ</MenuItem>
              </Select>
            </div>
          </div>

          <div className="footer-drawer"></div>
        </div>
      </Drawer>
    </div>
  )
}

export default ManageProductAdmin