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
        UsersController controller;

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
            controller = new UsersController(new TestShopContext());
            var u = GetTestUser();


            //Act
            var result = controller.PostUser(u);

            //Assert
            Assert.IsNotNull(result);


        }

        [TestMethod]
        public void PostUser_DuplicatedUser_ShouldReturnBadRequest()
        {
            //Arrange
            controller = new UsersController(new TestShopContext());
            var u = GetTestUser();

            //Act
            controller.PostUser(u);
            var result = controller.PostUser(u);

            //Assert
            

        }

        [TestMethod]
        public void PostUser_MissingData_ShouldReturnBadRequestModelState()
        {
            //Arrange
            controller = new UsersController(new TestShopContext());
            var u1 = GetTestUser();
            var u2 = GetTestUser();
            var u3 = GetTestUser();

            u1.Email = null;
            u2.Name = null;
            u3.PasswordHash = null;

            //Act
            
            var result = controller.PostUser(u);

            //Assert
            //Can be missed: Name, Email, Pass


        }

        [TestMethod]
        public void GetUserByNameAndPass_GoodScenario_ExistingUser_ShouldReturnBadRequest()
        {
            //Arrange
            controller = new UsersController(new TestShopContext());
            var u = GetTestUser();
            controller.PostUser(u);

            //Act
            var result = controller.GetUserByNameAndPass(u.Name,u.PasswordHash);
            var changedNameCase1 = controller.GetUserByNameAndPass(u.Name.ToUpper(), u.PasswordHash);
            var changedNameCase2 = controller.GetUserByNameAndPass(u.Name.ToLower(), u.PasswordHash);

            //Assert
            Assert.IsTrue(false); //resulted_user.Uid ?= u.UId
            Assert.IsTrue(false); //resulted_userC1.Uid ?= u.UId
            Assert.IsTrue(false); //resulted_userC2.Uid ?= u.UId

        }

        [TestMethod]
        public void GetUserByNameAndPass_BadUsernameAndOrPassword_ShouldReturnBadRequest()
        {
            //Arrange
            controller = new UsersController(new TestShopContext());
            var u = GetTestUser();
            controller.PostUser(u);

            //Act
            var badCasePass1 = controller.GetUserByNameAndPass(u.Name, u.PasswordHash.ToLower());
            var badCasePass2 = controller.GetUserByNameAndPass(u.Name, u.PasswordHash.ToUpper());

            var badPass3 = controller.GetUserByNameAndPass(u.Name, "alma");
            var badName = controller.GetUserByNameAndPass("alma", u.PasswordHash);


            //Assert
            Assert.IsFalse(true); //resulted_user.Uid ?= u.UId

        }


        [TestMethod]
        public void PutUser_GoodScenario_ShouldReturnStatusCodeNoContent204()
        {
            //Arrange
            controller = new UsersController(new TestShopContext());
            var u = GetTestUser();
            var uEnt = controller.PostUser(u);
            //u.UId = uEnt.getUser().UId;
            u.Name = "Changed";

            //Act
            var result = controller.PutUser(u.UId, u);

            //Assert
            
            //result.httpCode ?= 204
            var usr = controller.GetUserByNameAndPass(u.Name, u.PasswordHash);
            //u.UId ?= usr.UId

            
        }

        [TestMethod]
        public void PutUser_BadUId_ShouldReturn_NotFound()
        {
            //Arrange
            controller = new UsersController(new TestShopContext());
            var u = GetTestUser();
            var uEnt = controller.PostUser(u);
            //u.UId = uEnt.getUser().UId;
            u.Name = "Changed";

            //Act
            var result = controller.PutUser(u.UId+100, u);

            //Assert

        }

        [TestMethod]
        public void PutUser_AuthenticatedUserAndChangeingUserNotTheSame_ShouldReturn_NoUserPriviledge()
        {
            //Arrange
            controller = new UsersController(new TestShopContext());
            var u = GetTestUser();
            var uEnt = controller.PostUser(u);
            //u.UId = uEnt.getUser().UId;
            u.Name = "Changed";

            //Act
            var result = controller.PutUser(u.UId + 100, u);

            //Assert



        }
        



        private User GetTestUser(){
            return new User()
            {
                UId = 5,
                Email = "test@test.com",
                Name = "Test Name",

            };
        }
    }
}
