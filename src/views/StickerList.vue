<template>
  <v-row>
    <v-col cols="4">
      <v-text-field
        v-model="searchTerm"
        label="Busca por nome do jogador"
      />
    </v-col>
    <v-col cols="4">
      <v-combobox
        v-model="selectedCountry"
        clearable
        :items="listOfCountries"
        label="País"
      />
    </v-col>
    <v-col cols="4">
      <v-checkbox
        v-model="showOwned"
        label="Mostrar apenas figurinhas não obtidas"
      />
    </v-col>
  </v-row>

  <v-table>
    <thead>
      <tr>
        <th
          class="text-left"
          width="150"
        >
          Figurinha
        </th>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Number
        </th>
        <th class="text-left">
          País
        </th>
        <th class="text-left" />
        <th class="text-left" />
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in listOfStickers"
        :key="item.id"
      >
        <td class="align-center ">
          <v-img
            width="140"
            height="200"
            :src="item.imageUrl"
          />
        </td>
        <td>{{ item.name }}</td>
        <td>{{ item.number }}</td>
        <td>{{ item.country }}</td>
        <td>
          <v-checkbox
            v-model="item.wishlisted"
            :disabled="item.owned"
            label="Quero"
            @change="wishlistChange(item)"
          />
        </td>
        <td>
          <v-checkbox
            v-model="item.owned"
            label="Tenho para trocar"
            @change="ownedChange(item)"
          />
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script lang="ts">
interface Sticker {
  id: number;
  name: string;
  number: number;
  imageUrl: string;
  country: string;
  wishlisted: boolean;
  owned: boolean;
}
export default {
  data() {
    return {
      showOwned: false,
      searchTerm: "",
      selectedCountry: "",
      stickers: [
        {
          id: 1,
          name: 'Cristiano Ronaldo',
          number: 7,
          imageUrl: "https://inmagazine.ig.com.br/public/assets/img/galeria-imagens/CR7.jpg",
          country: "Portugal",
          wishlisted: false,
          owned: true
        },
        {
          id: 2,
          name: 'Lionel Messi',
          number: 10,
          imageUrl: "https://http2.mlstatic.com/D_NQ_NP_758194-MLB51370916676_092022-W.jpg",
          country: "Argentina",
          wishlisted: false,
          owned: true
        },
        {
          id: 3,
          name: 'Neymar',
          number: 10,
          imageUrl: "https://imagens.ne10.uol.com.br/veiculos/_midias/png/2022/08/29/figurinha_dourada_de_neymar-21628926.png",
          country: "Brasil",
          wishlisted: false,
          owned: false
        }
      ],
    }
  },
  computed: {
    listOfStickers(): Array<Sticker> {
      this.stickers
      const filterOwned = (list: Array<Sticker>) => {
        return this.showOwned ? list.filter(sticker => sticker.owned != this.showOwned) : list
      } 
      const filterName = (list: Array<Sticker>) => {
        return this.searchTerm ? list.filter(sticker => sticker.name.toLocaleLowerCase().includes(this.searchTerm.toLocaleLowerCase())) : list;
      }
      const filterCountry = (list: Array<Sticker>) => {
        return this.selectedCountry ? list.filter(sticker => sticker.country == this.selectedCountry) : list;
      }
      return filterCountry(filterName(filterOwned(this.stickers)));
    },
    listOfCountries(): Array<string> {
      return [...new Set(this.stickers.map(sticker => sticker.country))];
    }
  },
  methods: {
    wishlistChange(item: Sticker) {
      console.log(item);

    },
    ownedChange(item: Sticker) {
      console.log(item);

    }
  }
}
</script>

<style>

</style>