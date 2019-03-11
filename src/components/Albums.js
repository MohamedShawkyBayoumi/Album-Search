import React, { Fragment } from 'react';

import Album from './Album';

import { connect } from 'react-redux';

import escapeRegExp from 'escape-string-regexp'

import InfiniteScroll from 'react-infinite-scroll-component';


class Albums extends React.Component {


    state = {
        start: 0,
        end: 7
    }




    render(){
        const { language, artists, searchValue } = this.props; // from Redux

        // Shuffle function from http://stackoverflow.com/a/2450976
            function shuffle(array) {
                var currentIndex = array.length, temporaryValue, randomIndex;

                while (currentIndex !== 0) {
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;
                    temporaryValue = array[currentIndex];
                    array[currentIndex] = array[randomIndex];
                    array[randomIndex] = temporaryValue;
                }

                return array;
            }


        if(searchValue !== ""){
            const match = new RegExp(escapeRegExp(searchValue), 'i');



            var filter;



            filter = artists.filter(artist => artist.albums.some(album => match.test(album.name) || match.test(album.nameAr) || match.test(artist.nameEn) || match.test(artist.nameAr)));

            

        } else {

            


            filter = shuffle(artists);

            
        }

        return (
            <section id="albums">
                <div className="albums">
                    {filter.map((artist, i) => (
                        <Fragment key={i}>
                            {shuffle(artist.albums).map((album, i) => (
                                <Album 
                                    key={i}
                                    artist={artist}
                                    album={album} />
                            ))}
                        </Fragment>
                    
                    ))}
                </div>
            </section>
        );
    }
}


const mapStateToProps = state => {
    return {
        artists: state.data.artists,
        language: state.data.language,
        searchValue: state.data.searchValue
    }
}



export default connect(mapStateToProps, null)(Albums);