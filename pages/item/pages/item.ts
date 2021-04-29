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

  get getId() {
    return this.itemId;
  };

  async asyncData(context:Context):Promise<any> {
    let { params } = context;
    return {
      itemId:(params as ItemParams).id
    }
  }

  head() {
    return {
      title:"items:" + this.itemId,
    }
  }
}
