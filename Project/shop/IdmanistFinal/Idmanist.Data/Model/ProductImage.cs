using System;
using System.Collections.Generic;
using System.Text;

namespace Idmanist.Data.Model
{
    public class ProductImage
    {
        public int ImageId { get; set; }
        public string  ImageName { get; set; }
        public string ContentType { get; set; }
        public byte[] Content { get; set; }
    }
}
