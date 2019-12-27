<template>
  <div class="col-md-8">
        <div class="card">
            <div class="card-header card-header-primary">
                <h4 class="card-title">Edit Shop</h4>
            </div>
            <div class="card-body">
                <form>
                    <div class="row">
                        <div class="col-md-5">
                            <div class="form-group">
                                <label class="bmd-label-floating">Name</label>
                                <input type="text" class="form-control" name="name" v-model="form.name">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Description</label>
                                <div class="form-group">
                                    <label class="bmd-label-floating"> Please input your shop description.</label>
                                    <textarea class="form-control" rows="5" v-model="form.description"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <button type="submit" class="btn btn-primary pull-left" @click="addShop">Update</button>
                    <div class="clearfix"></div>
                </form>
            </div>
        </div>
        </div>
</template>


<script>
export default {
  name: "Edit",
  props: {
      shop: {
          type: Object
      }
  },

  data: function() {
      return {
          form: this.shop
      }
      
  },
  
  components: {
    
  }
};
</script>
