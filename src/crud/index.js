import React, { Component } from 'react'
import NavbarComponent from './NavbarComponent'

export default class Crud extends Component {
    render() {
        return (
            <div>
                <NavbarComponent />
                <div class="jumbotron">
                    <div class="container">
                        <h1 class="display-4">Selamat Datang</h1>
                        <p class="lead">Web ini dalam masa pembuatan, nantikan informasi - informasi seputar lowomham kerja di website ini</p>
                        <p>Tunggu saja nanti web ini akan terbit</p>
                        <a class="btn btn-primary btn-lg" href="#" role="button">Pelajari Lebih Lanjut </a>
                    </div>
                </div>
            </div>
        )
    }
}