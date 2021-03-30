import './hero.scss';

function HeroHeader () {
    return (
        <section class="hero">
            <div class="content">
                <h2>Writrs.</h2>
                <p>Writrs is a website designed by a writer for writers; a place where you can collectively store, organize and manage all of your ideas. To access these features please <a href='/login'>sign in.</a></p>
            </div>
            <div class="waves"></div>
        </section>
    )
}

export default HeroHeader;