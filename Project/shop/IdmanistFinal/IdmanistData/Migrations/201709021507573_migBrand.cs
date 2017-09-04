namespace IdmanistData.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class migBrand : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ProductBrand",
                c => new
                    {
                        ProductBrandId = c.Int(nullable: false, identity: true),
                        BrandName = c.String(),
                        BrandImage = c.String(),
                    })
                .PrimaryKey(t => t.ProductBrandId);
            
            AddColumn("dbo.Product", "Product_Price", c => c.Decimal(nullable: false, precision: 18, scale: 2));
            AddColumn("dbo.Product", "Productİnfo", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Product", "Productİnfo");
            DropColumn("dbo.Product", "Product_Price");
            DropTable("dbo.ProductBrand");
        }
    }
}
