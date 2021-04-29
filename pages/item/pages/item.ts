import { Context } from '@nuxt/types';
import { Component, Vue } from "nuxt-property-decorator";

interface ItemParams{
  [id:string]:string
}

@Component({
  components: {}
})
export default class PagesItem extends Vue {
  itemId:string = ""
  item:any = {};

  get getId() {
    return this.itemId;
  };

  get getAPIText() {
    return this.item.body;
  };

  async asyncData(context:Context):Promise<any> {
    let { params } = context;
    return {
      itemId:(params as ItemParams).id
    }
  }

  async fetch(){
    this.item = await fetch(`https://qiita.com/api/v2/items/${this.itemId}`)
      .then(
        res => {
          return res.json()
        },
      )
  }

  head() {
    return {
      title:"items:" + this.itemId,
    }
  }
}
