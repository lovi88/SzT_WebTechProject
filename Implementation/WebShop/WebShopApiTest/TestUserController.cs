using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using WebShop.Controllers;
using WebShopApiTest.Utils;
using WebShop.Models;

namespace WebShopApiTest
{
    [TestClass]
    public class TestUserController
    {
        UserController controller;

        #region TestInitialisation
        
        [ClassInitialize]
        private void InitClass()
        {
            
        }

        [TestInitialize]
        private void InitBeforeEachTest()
        {
            
        }

        [TestCleanup]
        private void CleanUpAfterEachTest()
        {

        }
        
        #endregion

        [TestMethod]
        public void PostUser_GoodScenario_ShouldReturnCreatedUser()
        {
            //Arrange
            controller = new UserController(new TestShopContext());
            var u = GetTestUser();


            //Act
            var result = controller.PostUser(u);

            //Assert
            Assert.IsNotNull(result);



        }


        private User GetTestUser(){
            return new User()
            {
                ID = 5,
                Email = "test@test.com",
                Name = "Test Name",

            };
        }
    }
}
