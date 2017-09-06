namespace IdmanistData.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class migadsa : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Product", "ProductBrandId", "dbo.ProductBrand");
            DropIndex("dbo.Product", new[] { "ProductBrandId" });
            RenameColumn(table: "dbo.Product", name: "ProductBrandId", newName: "ProductBrand_ProductBrandId");
            AlterColumn("dbo.Product", "ProductBrand_ProductBrandId", c => c.Int());
            CreateIndex("dbo.Product", "ProductBrand_ProductBrandId");
            AddForeignKey("dbo.Product", "ProductBrand_ProductBrandId", "dbo.ProductBrand", "ProductBrandId");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Product", "ProductBrand_ProductBrandId", "dbo.ProductBrand");
            DropIndex("dbo.Product", new[] { "ProductBrand_ProductBrandId" });
            AlterColumn("dbo.Product", "ProductBrand_ProductBrandId", c => c.Int(nullable: false));
            RenameColumn(table: "dbo.Product", name: "ProductBrand_ProductBrandId", newName: "ProductBrandId");
            CreateIndex("dbo.Product", "ProductBrandId");
            AddForeignKey("dbo.Product", "ProductBrandId", "dbo.ProductBrand", "ProductBrandId", cascadeDelete: true);
        }
    }
}
