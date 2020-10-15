export default {
  computed: {
    filterBlogs: function() {
      return this.blogs.filter(blog => {
        //   yang di retrun di bawah ini adalah boolean yang dalamanya ada arary
        // jadi kaloa match biarkan di array kalo tidak, di array nya juga nggak
        return blog.nama.match(this.search);
      });
    }
  }
};
