import { Injectable } from "@angular/core";
import { Book } from "./book.model";


@Injectable({
    providedIn: 'root',
})
export class BookService {
    getBooks(): Book[] {
        return [
            {
                name:'I Was Caught up in a Hero Summoning, but That World Is at Peace',
                author: 'Toudai, 灯台',
                genre: 'Comedy, Fantasy, Harem, Romance, Slice of Life',
                imageUrl: 'https://freewebnovel.com/files/article/image/1/1436/1436s.jpg',
            },
            {
                name:'Golden Experience',
                author: 'Harajun, 原純',
                genre: 'Fantasy, Sci-fi, Action, Adventure',
                imageUrl: 'https://freewebnovel.com/files/article/image/5/5184/5184s.jpg',
            },
            {
                name:'Kuma Kuma Kuma Bear',
                author: 'くまなの, Kumanano',
                genre: 'Romance, Adventure, Fantasy, Action, Slice of Life, Comedy',
                imageUrl: 'https://freewebnovel.com/files/article/image/0/559/559s.jpg',
            },
            {
                name:'Sword, Magic and Academic Society',
                author: 'Nishiura Mao, 西浦真魚',
                genre: 'Action, Adventure, Comedy, Fantasy, Harem',
                imageUrl: 'https://freewebnovel.com/files/article/image/4/4850/4850s.jpg',
            },
            {
                name:'Reincarnated into a Game As the Heros Friend',
                author: 'すずきゆうき, 涼樹悠樹',
                genre: 'Action, Adventure, Fantasy, Romance, Shounen, Reincarnation',
                imageUrl: 'https://freewebnovel.com/files/article/image/4/4156/4156s.jpg',
            },
            {
                name:'A Demon Lords Tale: Dungeons, Monster Girls, and Heartwarming Bliss',
                author: 'Ryuryu',
                genre: 'Shounen, Seinen, Fantasy, Comedy, Harem, Slice of Life, Action, Romance, Adventure',
                imageUrl: 'https://freewebnovel.com/files/article/image/0/752/752s.jpg',
            },
            {
                name:'The Hero King, Reincarnate to Master the Art of War ~And Thus, I Became The Strongest Knight Disciple (♀) in The World~',
                author: 'Hayaken',
                genre: 'Action, Adventure, Comedy, Fantasy, Gender bender',
                imageUrl: 'https://freewebnovel.com/files/article/image/3/3107/3107s.jpg',
            },
            
            
        ];
    }
}