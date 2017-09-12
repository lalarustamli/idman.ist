namespace IdmanistData.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class SliderAdded : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.MainSlider",
                c => new
                    {
                        slideId = c.Int(nullable: false, identity: true),
                        slideOrder = c.Int(nullable: false),
                        slideImage = c.String(),
                        slideTitle = c.String(),
                        slideDescription = c.String(),
                    })
                .PrimaryKey(t => t.slideId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.MainSlider");
        }
    }
}
