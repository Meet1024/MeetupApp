import { useContext } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import FavoritesContext from '../store/favorite-context';

function FavouritesPage() {

    const favoritesCtx = useContext(FavoritesContext)

    let content;

    if (favoritesCtx.totalFavorites === 0) {
        content = <p>There is No Favorites. Start Adding some?</p>
    }

    else {
        content = <MeetupList meetups={favoritesCtx.favorites} />
    }
    return (
        <section>
            <h1>
                My Favorites
            </h1>
            {content}

        </section>
    );
}

export default FavouritesPage;