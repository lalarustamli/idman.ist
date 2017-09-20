namespace IdmanistData.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ImagePathAdded : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.ProductImage", "Path", c => c.String(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.ProductImage", "Path");
        }
    }
}
