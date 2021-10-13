import React, {Component} from 'react';
import './about.css';
import pp1 from '../asserts/viraj_pp.png';
import pp2 from '../asserts/kavindi_pp.png';
import pp3 from '../asserts/senura_pp.png';
import pp4 from '../asserts/hiruni_pp.png';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: null,
        }
    }

    componentDidMount() {

        setTimeout(() => {
            this.setState({
                isLoaded: true,
            });
        }, 1000);
    }

    render() {
        if (!this.state.isLoaded) {
            return (
                <div>
                    <div className="container">
                        <div className="section-title">
                            <h2>Meet the Team &lt;/BackSlash&gt;</h2>
                        </div>
                    </div>
                    <center> data loading...</center>
                </div>
            )
        }
        return (
            <div>
                <div className="container">
                    <div className="section-title">
                        <h2>Meet the Team &lt;/BackSlash&gt;</h2>
                    </div>
                    <div className="row">
                        {/*Viraj*/}
                        <div className="column">
                            <div className="team-2">
                                <div className="team-img">
                                    <img src={pp1} alt="Viraj"/>
                                    <div className="team-social">
                                        <a className="social-tw" rel="noreferrer"
                                           href="https://twitter.com/VirajIglesias" target="_blank">
                                            <i className="fab fa-twitter"/></a>
                                        <a className="social-fb" rel="noreferrer"
                                           href="https://www.facebook.com/vt.konthasinghe" target="_blank">
                                            <i className="fab fa-facebook-f"/></a>
                                        <a className="social-li" rel="noreferrer"
                                           href="https://www.linkedin.com/in/viraj-konthasinghe/" target="_blank">
                                            <i className="fab fa-linkedin-in"/></a>
                                        <a className="social-in" rel="noreferrer"
                                           href="https://www.instagram.com/viraj_thanuja" target="_blank">
                                            <i className="fab fa-instagram"/></a>
                                        <a className="social-yt" rel="noreferrer"
                                           href="https://www.youtube.com/c/GGProgramming" target="_blank">
                                            <i className="fab fa-youtube"/></a>
                                    </div>
                                </div>
                                <div className="team-content">
                                    <h2>Viraj <br/> Konthasinghe</h2>
                                    <h3>Leader &amp; Software Architect</h3>
                                    <p>IT18145526</p>
                                    <h10>v.konthasinghe@gmail.com</h10>
                                </div>
                            </div>
                        </div>
                        {/*Kavindi*/}
                        <div className="column">
                            <div className="team-2">
                                <div className="team-img">
                                    <img src={pp2} alt="Kavindi"/>
                                    <div className="team-social">
                                        <a className="social-tw" target="_blank" rel="noreferrer"
                                           href="https://twitter.com/KavindiGunasin1">
                                            <i className="fab fa-twitter"/></a>
                                        <a className="social-fb" target="_blank" rel="noreferrer"
                                           href="https://www.facebook.com/kavindi.gunasinghe.9">
                                            <i className="fab fa-facebook-f"/></a>
                                        <a className="social-li" target="_blank" rel="noreferrer"
                                           href="https://www.linkedin.com/in/kavindi-gunasinghe-68816a160/">
                                            <i className="fab fa-linkedin-in"/></a>
                                        <a className="social-in" target="_blank"
                                           href="https://www.instagram.com/__kavindi_____/" rel="noreferrer">
                                            <i className="fab fa-instagram"/></a>
                                        <a className="social-yt" target="_blank" rel="noreferrer"
                                           href="https://www.youtube.com/channel/UCez-R8JSjQl7LP-mJVsPk-w">
                                            <i className="fab fa-youtube"/></a>
                                    </div>
                                </div>
                                <div className="team-content">
                                    <h2>Kavindi Gunasinghe</h2>
                                    <h3>Member &amp; Software Engineer</h3>
                                    <p>IT18143614</p>
                                    <h10>uldkavindigunasinghe@gmail.com</h10>
                                </div>
                            </div>
                        </div>
                        {/*Senura*/}
                        {/*TODO: Insert social media links Senura*/}
                        <div className="column">
                            <div className="team-2">
                                <div className="team-img">
                                    <img src={pp3} alt="Senura"/>
                                    <div className="team-social">
                                        <a className="social-tw" target="_blank" rel="noreferrer"
                                           href="https://twitter.com/DiwanthaSenura">
                                            <i className="fab fa-twitter"/></a>
                                        <a className="social-fb" target="_blank" rel="noreferrer"
                                           href="https://www.facebook.com/Senura.Diwantha">
                                            <i className="fab fa-facebook-f"/></a>
                                        <a className="social-li" target="_blank" rel="noreferrer"
                                           href="https://www.linkedin.com/in/senura-diwantha-381b3a193/">
                                            <i className="fab fa-linkedin-in"/></a>
                                        <a className="social-in" target="_blank" rel="noreferrer"
                                           href="https://www.instagram.com/_____senuuu__/">
                                            <i className="fab fa-instagram"/></a>
                                        <a className="social-yt" target="_blank" rel="noreferrer"
                                           href="https://www.youtube.com/channel/UCez-R8JSjQl7LP-mJVsPk-w">
                                            <i className="fab fa-youtube"/></a>
                                    </div>
                                </div>
                                <div className="team-content">
                                    <h2>Senura <br/> Diwantha</h2>
                                    <h3>Member &amp; UI/UX Engineer</h3>
                                    <p>IT18154504</p>
                                    <h10>senuradiwantha900@gmail.com</h10>
                                </div>
                            </div>
                        </div>
                        {/*Hiruni*/}
                        <div className="column">
                            <div className="team-2">
                                <div className="team-img">
                                    <img src={pp4} alt="Hiruni"/>
                                    <div className="team-social">
                                        <a className="social-tw" target="_blank" rel="noreferrer"
                                           href="https://twitter.com/HMalaviarachchi">
                                            <i className="fab fa-twitter"/></a>
                                        <a className="social-fb" target="_blank" rel="noreferrer"
                                           href="https://www.facebook.com/hiru.wasana/">
                                            <i className="fab fa-facebook-f"/></a>
                                        <a className="social-li" target="_blank" rel="noreferrer"
                                           href="https://www.linkedin.com/in/hiruni-malaviarachchi-346a4616b/">
                                            <i className="fab fa-linkedin-in"/></a>
                                        <a className="social-in" target="_blank" rel="noreferrer"
                                           href="https://www.instagram.com/__hiruuuunii___/">
                                            <i className="fab fa-instagram"/></a>
                                        <a className="social-yt" target="_blank" rel="noreferrer"
                                           href="https://www.youtube.com/channel/UCez-R8JSjQl7LP-mJVsPk-w">
                                            <i className="fab fa-youtube"/></a>
                                    </div>
                                </div>
                                <div className="team-content">
                                    <h2>Hiruni Malaviarachchi</h2>
                                    <h3>Member &amp; Software Engineer</h3>
                                    <p>IT18137910</p>
                                    <h10>mail2hiruni@gmail.com</h10>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
