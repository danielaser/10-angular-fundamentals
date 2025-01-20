import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-team-container',
  imports: [CommonModule],
  templateUrl: './team-container.component.html',
  styleUrls: ['./team-container.component.scss']
})
export class TeamContainerComponent {
  public teams = [
    { name: 'Coinbase', img: '/images/teams/coinbase.webp' },
    { name: 'Optimism', img: '/images/teams/optimism.webp' },
    { name: 'Arbitrum', img: '/images/teams/arbitrum.webp' },
    { name: 'Warpcast', img: '/images/teams/warpcast.webp' },
    { name: 'Opensea Pro', img: '/images/teams/opensea-pro.webp' },
    { name: 'ENS', img: '/images/teams/ens.webp' },
    { name: 'Prop House', img: '/images/teams/prop-house.webp' },
    { name: 'Matcha', img: '/images/teams/matcha.webp' },
    { name: 'Kwenta', img: '/images/teams/kwenta.webp' },
    { name: 'Aura', img: '/images/teams/aura.webp' },
    { name: 'Lyra', img: '/images/teams/lyra.webp' },
    { name: 'LooksRare', img: '/images/teams/looksrare.webp' },
    { name: 'DefiLlama', img: '/images/teams/defillama.webp' },
    { name: 'NFTX Yield', img: '/images/teams/nftx-yield.webp' },
    { name: 'PoolTogether', img: '/images/teams/pooltogether.webp' },
    { name: 'Art Blocks', img: '/images/teams/art-blocks.webp' },
    { name: 'Cool Cats', img: '/images/teams/cool-cats.webp' },
    { name: 'Party', img: '/images/teams/party.webp' },
    { name: 'SuperRare', img: '/images/teams/superrare.webp' },
    { name: 'Trader Joe', img: '/images/teams/trader-joe.webp' },
    { name: 'Doodles', img: '/images/teams/doodles.webp' },
    { name: 'Frax', img: '/images/teams/frax.webp' },
    { name: 'Speedtracer', img: '/images/teams/speedtracer.webp' },
    { name: 'Gitcoin', img: '/images/teams/gitcoin.webp' }
  ];

}
