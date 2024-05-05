import React from "react";
import './styles.css';

function LandingPage() {
    return ( 
        <>
            <header className="Header fixed top-0 right-0 text-3xl">
                Header atau Navbar 
            </header>
            <main className="center">
                <div className="bio-container">
                    <h1>BIODATA</h1>
                    <div className="biodata-row">
                        <div className="biodata-item">
                            <p>Nama     : Nurul Eka Fajriah </p>
                            <p>Umur     : 20 tahun</p>
                            <p>Status   : Mahasiswa</p>
                            <p>Alamat   : Sumba Nusa Tenggara Timur</p>
                        </div>
                        <div className="biodata-item">
                            <p>Nama     : Nurul Eka Fajriah </p>
                            <p>Umur     : 20 tahun</p>
                            <p>Status   : Orang Kaya</p>
                            <p>Pekerjan : penjual rongsokan</p>
                        </div>
                        <div className="biodata-item">
                            <p>Nama     : Nurul Eka Fajriah </p>
                            <p>Umur     : 20 tahun</p>
                            <p>Status   : Pekerja</p>
                            <p>Alamat   : Tanah Marapu</p>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="Footer findex bottom-0 left-0 right-0 tsxt-3xl">
                Yt : Nurul Eka Fajriah Ig : nurul_eka23 
            </footer>
        </>
     );
}

export default LandingPage;