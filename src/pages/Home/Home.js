import React, { Component } from 'react'
import axios from 'axios';

export default class Home extends Component {

    //state danh sách phim
    state = {
        arrFilms: []
    }

    loadFilms = () => {
        //dùng axios gọi lấy thông tin từ backend về qua api
        const promise = axios({
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
            method: 'GET'
        });

        //Xử lý thành công
        promise.then((result) => {
            console.log('result', result.data);
            this.setState({
                arrFilms: result.data
            });
        })

        //Xử lý khi request lỗi
        promise.catch((error) => {
            console.log(('err', error.reponse.data));
        })
    }

    renderFilms = () => {
        return this.state.arrFilms.map((film, index) => {
            return <div className="col-4" key={index}>
                <div className="card text-left">
                    <img className="card-img-top" src={film.hinhAnh} alt={film.hinhAnh} />
                    <div className="card-body">
                        <h4 className="card-title">{film.tenPhim}</h4>
                        <p className="card-text">{film.moTa}</p>
                        <button className="bg-info text-center">Detail</button>
                    </div>
                </div>
            </div>

        })
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.loadFilms();
                }}> Lấy danh sách phim </button>
                <div className="text-center display-4">Danh Sách Phim</div>
                <div className="row">
                    {this.renderFilms()}
                </div>
            </div>
        )
    }

    //Hàm giống hàm render của react component kế thừa nên có
    componentDidMount(){
        //Các api muốn gọi sau khi giao diện render thì sẽ gọi trong hàm này
        this.loadFilms();
    }
}
