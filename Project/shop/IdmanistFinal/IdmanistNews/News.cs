//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IdmanistNews
{
    using System;
    using System.Collections.Generic;
    
    public partial class News
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public News()
        {
            this.Comments = new HashSet<Comment>();
            this.Images = new HashSet<Image>();
            this.Tags = new HashSet<Tag>();
        }
    
        public int id { get; set; }
        public string title { get; set; }
        public string description { get; set; }
        public string content_text { get; set; }
        public Nullable<System.Guid> authorId { get; set; }
        public int typeId { get; set; }
        public Nullable<int> categoryId { get; set; }
        public string img_route { get; set; }
        public string thumbnail_route { get; set; }
        public int seen { get; set; }
        public System.DateTime publish_date { get; set; }
        public string video_Route { get; set; }
    
        public virtual Category Category { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Comment> Comments { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Image> Images { get; set; }
        public virtual NewsType NewsType { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Tag> Tags { get; set; }
    }
}
