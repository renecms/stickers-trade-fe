<template>
  <v-checkbox
    v-model="showOwned"
    label="Mostrar apenas figurinhas não obtidas"
  />
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
        <th class="text-left" />
        <th class="text-left" />
      </tr>
    </thead>
    <tbody>
      <tr 
        v-for="item in listOfStickers"
        :key="item.name"
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
        <td>
          <v-checkbox
            v-model="item.wishlisted"
            :disabled="item.owned"
            label="Quero"
          />
        </td>
        <td>
          <v-checkbox
            v-model="item.owned"
            label="Tenho para trocar"
          />
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script lang="ts">
export default {
  data() {
    return {
      showOwned: false,
      stickers: [
        {
          name: 'Cristiano Ronaldo',
          number: 7,
          imageUrl: "https://inmagazine.ig.com.br/public/assets/img/galeria-imagens/CR7.jpg",
          wishlisted: false,
          owned: true
        },
        {
          name: 'Lionel Messi',
          number: 10,
          imageUrl: "https://http2.mlstatic.com/D_NQ_NP_758194-MLB51370916676_092022-W.jpg",
          wishlisted: false,
          owned: true
        },
        {
          name: 'Neymar',
          number: 10,
          imageUrl: "https://imagens.ne10.uol.com.br/veiculos/_midias/png/2022/08/29/figurinha_dourada_de_neymar-21628926.png",
          wishlisted: false,
          owned: false
        }
      ],
    }
  },
  computed: {
    listOfStickers() {
      return this.showOwned ? this.stickers.filter(sticker => sticker.owned != this.showOwned) : this.stickers;
    }
  }
}
</script>

<style>

</style>