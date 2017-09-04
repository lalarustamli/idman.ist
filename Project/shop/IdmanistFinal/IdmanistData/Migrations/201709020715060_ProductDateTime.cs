namespace IdmanistData.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ProductDateTime : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Product", "Product_date", c => c.DateTime(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Product", "Product_date");
        }
    }
}
